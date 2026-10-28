$excelQa=$null
$bookQa=$null
try {
  $excelQa=New-Object -ComObject Excel.Application
  $excelQa.Visible=$false
  $excelQa.DisplayAlerts=$false
  $excelQa.AutomationSecurity=3
  $bookQa=$excelQa.Workbooks.Open((Join-Path (Get-Location) 'tmp\no-id-list-check\IBACMI_NO_ID_LIST_SY2025-2026.xlsx'),0,$true)
  $sheetQa=$bookQa.Worksheets.Item(1)
  if($bookQa.Worksheets.Count -ne 1 -or $sheetQa.Name -ne 'NO ID LIST'){throw 'Invalid workbook sheets'}
  if($sheetQa.UsedRange.Rows.Count -ne 31){throw 'Incomplete workbook data'}
  if(-not $sheetQa.AutoFilterMode){throw 'AutoFilter missing'}
  if($excelQa.ActiveWindow.SplitRow -ne 8){throw 'Frozen headers missing'}
  $foundQa=$false
  for($rowQa=9;$rowQa -le 31;$rowQa++){
    if($sheetQa.Cells.Item($rowQa,2).Text -eq '0000123'){
      $foundQa=$true
      if($sheetQa.Cells.Item($rowQa,4).HasFormula){throw 'Unsafe formula'}
    }
  }
  if(-not $foundQa){throw 'Leading zeros not preserved'}
  $sheetQa.PageSetup.Orientation=2
  $sheetQa.PageSetup.Zoom=$false
  $sheetQa.PageSetup.FitToPagesWide=1
  $sheetQa.PageSetup.FitToPagesTall=$false
  $sheetQa.ExportAsFixedFormat(0,(Join-Path (Get-Location) 'tmp\no-id-list-check\excel-preview.pdf'))
  Write-Output 'PASS Microsoft Excel opened the workbook: 23 rows, one named worksheet, AutoFilter, frozen headers, leading zeros preserved, and formula-like text remains literal. Preview exported.'
} finally {
  if($bookQa){$bookQa.Close($false)}
  if($excelQa){$excelQa.Quit(); [void][Runtime.InteropServices.Marshal]::ReleaseComObject($excelQa)}
}

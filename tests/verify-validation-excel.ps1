$validationExcel=$null
$validationBook=$null
try {
  $validationExcel=New-Object -ComObject Excel.Application
  $validationExcel.Visible=$false
  $validationExcel.DisplayAlerts=$false
  $validationExcel.AutomationSecurity=3
  $validationBook=$validationExcel.Workbooks.Open((Join-Path (Get-Location) 'tmp\validation-check\validation-report.xlsx'),0,$true)
  if($validationBook.Worksheets.Count -ne 8){throw 'Expected eight worksheets'}
  $expectedNames=@('VALIDATION SUMMARY','ALL COMPARISON RESULTS','MATCHED','MISMATCHED','NOT FOUND','DUPLICATES','MISSING FROM UPLOAD','INVALID - AMBIGUOUS')
  for($validationIndex=1;$validationIndex -le 8;$validationIndex++){
    $validationSheet=$validationBook.Worksheets.Item($validationIndex)
    if($validationSheet.Name -ne $expectedNames[$validationIndex-1]){throw 'Unexpected worksheet name'}
    if(-not $validationSheet.AutoFilterMode){throw 'AutoFilter missing'}
    $validationSheet.Activate()
    if($validationExcel.ActiveWindow.SplitRow -ne 8){throw 'Frozen headers missing'}
  }
  $validationSheet=$validationBook.Worksheets.Item(2)
  if($validationSheet.UsedRange.Rows.Count -ne 32){throw 'Full comparison dataset missing'}
  if($validationSheet.Cells.Item(9,3).HasFormula){throw 'Student ID must be literal text'}
  $validationSheet=$validationBook.Worksheets.Item(1)
  $validationSheet.PageSetup.Orientation=2
  $validationSheet.PageSetup.Zoom=$false
  $validationSheet.PageSetup.FitToPagesWide=1
  $validationSheet.PageSetup.FitToPagesTall=$false
  $validationSheet.ExportAsFixedFormat(0,(Join-Path (Get-Location) 'tmp\validation-check\excel-summary-preview.pdf'))
  Write-Output 'PASS Microsoft Excel: eight correctly named sheets, full 24-row comparison, AutoFilters, frozen headers and literal text cells. Summary preview exported.'
} finally {
  if($validationBook){$validationBook.Close($false)}
  if($validationExcel){$validationExcel.Quit();[void][Runtime.InteropServices.Marshal]::ReleaseComObject($validationExcel)}
}

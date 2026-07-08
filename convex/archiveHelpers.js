export function recordSnapshot(record) {
  if (!record) return null

  const data = { ...record }
  delete data._creationTime
  delete data._id
  return data
}

export async function archiveRecord(ctx, { record, sourceLabel, sourceTable }) {
  if (!record) return null

  return await ctx.db.insert('archive', {
    data: recordSnapshot(record),
    deletedAt: Date.now(),
    deletionKind: 'record',
    sourceId: String(record._id),
    sourceLabel,
    sourceTable,
  })
}

export async function archiveFields(
  ctx,
  { data, sourceId, sourceLabel, sourceTable },
) {
  return await ctx.db.insert('archive', {
    data,
    deletedAt: Date.now(),
    deletionKind: 'fields',
    sourceId: String(sourceId),
    sourceLabel,
    sourceTable,
  })
}

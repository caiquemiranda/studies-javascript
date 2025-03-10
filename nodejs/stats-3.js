const os = require('os')

const { freeMem, totalMem } = os

const total = parseInt(totalMem() / 1024 / 1024)
const mem = parseInt(freeMem() / 1024 / 1024)
const percent = parseInt((mem / total) * 100)

const stats = {
    free: '${mem} MB',
    total: '${total} MB',
    percent: '${percent}%'
}

console.table(stats);        
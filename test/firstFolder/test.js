let a = 'Day'
let b = {
  key: 'ctrl+t',
  command: 'extension.vim_ctrl+t',
  when: 'editorTextFocus && vim.active && vim.use<C-t> && !inDebugRepl',
}
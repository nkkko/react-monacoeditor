(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[125],{969:function(t,n,e){"use strict";e.r(n),n.default="type storage is int\ntype parameter is\n  Increment of int\n| Decrement of int\n| Reset\ntype return is list (operation) * storage\n// Two entrypoints\nfunction add (const store : storage; const delta : int) : storage is\n  store + delta\nfunction sub (const store : storage; const delta : int) : storage is\n  store - delta\n(* Main access point that dispatches to the entrypoints according to\n   the smart contract parameter. *)\nfunction main (const action : parameter; const store : storage) : return is\n ((nil : list (operation)),    // No operations\n  case action of\n    Increment (n) -> add (store, n)\n  | Decrement (n) -> sub (store, n)\n  | Reset         -> 0\n  end)\n"}}]);
//# sourceMappingURL=125.bdd2a142.chunk.js.map
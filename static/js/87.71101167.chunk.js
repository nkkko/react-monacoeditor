(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[87],{931:function(t,e,o){"use strict";o.r(e),e.default="rem *******Begin Comment**************\nrem This program starts the superapp batch program on the network,\nrem directs the output to a file, and displays the file\nrem in Notepad.\nrem *******End Comment**************\n@echo off\nif exist C:\\output.txt goto EMPTYEXISTS\nsetlocal\n  path=g:\\programs\\superapp;%path%\n  call superapp>C:\\output.txt\nendlocal\n:EMPTYEXISTS\nstart notepad c:\\output.txt"}}]);
//# sourceMappingURL=87.71101167.chunk.js.map
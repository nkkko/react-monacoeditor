(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[135],{968:function(e,a,n){"use strict";n.r(a),a.default="create view tables_vw as\nselect distinct(id) table_id\n,trim(datname)   db_name\n,trim(nspname)   schema_name\n,trim(relname)   table_name\nfrom stv_tbl_perm\njoin pg_class on pg_class.oid = stv_tbl_perm.id\njoin pg_namespace on pg_namespace.oid = relnamespace\njoin pg_database on pg_database.oid = stv_tbl_perm.db_id;\n"}}]);
//# sourceMappingURL=135.b3291497.chunk.js.map
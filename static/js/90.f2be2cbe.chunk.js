(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[90],{901:function(n,e,i){"use strict";i.r(e),e.default='"""\nA CoffeeScript sample.\n"""\n\nclass Vehicle\n  constructor: (@name) =>\n  \n  drive: () =>\n    alert "Conducting #{@name}"\n\nclass Car extends Vehicle\n  drive: () =>\n    alert "Driving #{@name}"\n\nc = new Car "Brandie"\n\nwhile notAtDestination()\n  c.drive()\n\nraceVehicles = (new Car for i in [1..100])\n\nstartRace = (vehicles) -> [vehicle.drive() for vehicle in vehicles]\n\nfancyRegExp = ///\n  (\\d+)  # numbers\n  (\\w*)  # letters\n  $    # the end\n///\n'}}]);
//# sourceMappingURL=90.f2be2cbe.chunk.js.map
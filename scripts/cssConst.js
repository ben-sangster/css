var util = require("dmz/types/util")
  , defs = require("dmz/runtime/definitions")
  ;

util.defineConst(exports, "NameAttr", defs.createNamedHandle("Name"));
util.defineConst(exports, "ServiceAttr", defs.createNamedHandle("Service Link"));
util.defineConst(exports, "OSAttr", defs.createNamedHandle("Operating System"));
util.defineConst(exports, "IPVAttr", defs.createNamedHandle("IP Version"));
util.defineConst(exports, "MalwareAttr", defs.createNamedHandle("Malware Type"));
util.defineConst(exports, "Select", defs.lookupState("Selected"));

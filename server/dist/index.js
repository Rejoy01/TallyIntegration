"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _DbConnection = _interopRequireDefault(require("./DBCONNECTION/DbConnection.js"));
var _LedgerRoutes = require("./Routes/LedgerRoutes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var App = (0, _express["default"])();
App.use(_express["default"].json());
App.use((0, _cors["default"])());
App.use((0, _cookieParser["default"])());
App.use('/tally/', _LedgerRoutes.LedgerCreation);
App.listen(process.env.PORT, (0, _DbConnection["default"])());
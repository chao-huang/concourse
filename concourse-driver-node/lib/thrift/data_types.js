//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var shared_ttypes = require('./shared_types')


var ttypes = module.exports = {};
ttypes.TSymbolType = {
  'CONJUNCTION' : 1,
  'KEY' : 2,
  'VALUE' : 3,
  'PARENTHESIS' : 4,
  'OPERATOR' : 5,
  'TIMESTAMP' : 6
};
TObject = module.exports.TObject = function(args) {
  this.data = null;
  this.type = 7;
  if (args) {
    if (args.data !== undefined && args.data !== null || (args.type == 9 && args.data == null)) {
      this.data = args.data;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field data is unset!');
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field type is unset!');
    }
  }
};
TObject.prototype = {};
TObject.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TObject.prototype.write = function(output) {
  output.writeStructBegin('TObject');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 1);
    output.writeBinary(this.data);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 2);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TSymbol = module.exports.TSymbol = function(args) {
  this.type = null;
  this.symbol = null;
  if (args) {
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field type is unset!');
    }
    if (args.symbol !== undefined && args.symbol !== null) {
      this.symbol = args.symbol;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field symbol is unset!');
    }
  }
};
TSymbol.prototype = {};
TSymbol.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.symbol = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TSymbol.prototype.write = function(output) {
  output.writeStructBegin('TSymbol');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.symbol !== null && this.symbol !== undefined) {
    output.writeFieldBegin('symbol', Thrift.Type.STRING, 2);
    output.writeString(this.symbol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TCriteria = module.exports.TCriteria = function(args) {
  this.symbols = null;
  if (args) {
    if (args.symbols !== undefined && args.symbols !== null) {
      this.symbols = Thrift.copyList(args.symbols, [ttypes.TSymbol]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field symbols is unset!');
    }
  }
};
TCriteria.prototype = {};
TCriteria.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.symbols = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.TSymbol();
          elem6.read(input);
          this.symbols.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCriteria.prototype.write = function(output) {
  output.writeStructBegin('TCriteria');
  if (this.symbols !== null && this.symbols !== undefined) {
    output.writeFieldBegin('symbols', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.symbols.length);
    for (var iter7 in this.symbols)
    {
      if (this.symbols.hasOwnProperty(iter7))
      {
        iter7 = this.symbols[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


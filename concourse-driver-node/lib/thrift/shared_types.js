//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.Operator = {
  'REGEX' : 1,
  'NOT_REGEX' : 2,
  'EQUALS' : 3,
  'NOT_EQUALS' : 4,
  'GREATER_THAN' : 5,
  'GREATER_THAN_OR_EQUALS' : 6,
  'LESS_THAN' : 7,
  'LESS_THAN_OR_EQUALS' : 8,
  'BETWEEN' : 9,
  'LINKS_TO' : 10,
  'LIKE' : 11,
  'NOT_LIKE' : 12
};
ttypes.Type = {
  'BOOLEAN' : 1,
  'DOUBLE' : 2,
  'FLOAT' : 3,
  'INTEGER' : 4,
  'LONG' : 5,
  'LINK' : 6,
  'STRING' : 7,
  'TAG' : 8,
  'NULL' : 9,
  'TIMESTAMP' : 10
};
ttypes.Diff = {
  'ADDED' : 1,
  'REMOVED' : 2
};
AccessToken = module.exports.AccessToken = function(args) {
  this.data = null;
  if (args) {
    if (args.data !== undefined && args.data !== null) {
      this.data = args.data;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field data is unset!');
    }
  }
};
AccessToken.prototype = {};
AccessToken.prototype.read = function(input) {
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

AccessToken.prototype.write = function(output) {
  output.writeStructBegin('AccessToken');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 1);
    output.writeBinary(this.data);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TransactionToken = module.exports.TransactionToken = function(args) {
  this.accessToken = null;
  this.timestamp = null;
  if (args) {
    if (args.accessToken !== undefined && args.accessToken !== null) {
      this.accessToken = new ttypes.AccessToken(args.accessToken);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field accessToken is unset!');
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field timestamp is unset!');
    }
  }
};
TransactionToken.prototype = {};
TransactionToken.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.accessToken = new ttypes.AccessToken();
        this.accessToken.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
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

TransactionToken.prototype.write = function(output) {
  output.writeStructBegin('TransactionToken');
  if (this.accessToken !== null && this.accessToken !== undefined) {
    output.writeFieldBegin('accessToken', Thrift.Type.STRUCT, 1);
    this.accessToken.write(output);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 2);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


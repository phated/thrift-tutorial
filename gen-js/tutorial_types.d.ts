//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

declare module tutorial {
  /**
   * You can define enums, which are just 32 bit integers. Values are optional
   * and start at 1 if not supplied, C style again.
   */
  enum Operation {
    ADD = 1,
    SUBTRACT = 2,
    MULTIPLY = 3,
    DIVIDE = 4,
  }

  /**
   * Structs are the basic complex data structures. They are comprised of fields
   * which each have an integer identifier, a type, a symbolic name, and an
   * optional default value.
   * 
   * Fields can be declared "optional", which ensures they will not be included
   * in the serialized output if they aren't set.  Note that this requires some
   * manual management in some languages.
   */
  class Work {
    num1: number;
    num2: number;
    op: tutorial.Operation;
    comment: string;

    constructor(args?: { num1: number; num2: number; op: tutorial.Operation; comment?: string; });
  }

  /**
   * Structs can also be exceptions, if they are nasty.
   */
  class InvalidOperation extends Thrift.TException {
    whatOp: number;
    why: string;

    constructor(args?: { whatOp: number; why: string; });
  }

  /**
   * Thrift also lets you define constants for use across languages. Complex
   * types and structs are specified using JSON notation.
   */
  var INT32CONSTANT: number;

  var MAPCONSTANT: { [k: string]: string; };
}
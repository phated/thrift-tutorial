/// <reference path="SharedService.d.ts" />
//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

declare module tutorial {
  /**
   * Ahh, now onto the cool part, defining a service. Services just need a name
   * and can optionally inherit from another service using the extends keyword.
   */
  class CalculatorClient extends SharedServiceClient {
    input: Thrift.TJSONProtocol;
    output: Thrift.TJSONProtocol;
    seqid: number;

    constructor(input: Thrift.TJSONProtocol, output?: Thrift.TJSONProtocol);

    /**
     * A method definition looks like C code. It has a return type, arguments,
     * and optionally a list of exceptions that it may throw. Note that argument
     * lists and exception lists are specified using the exact same syntax as
     * field lists in struct or exception definitions.
     */
    ping(): void;

    /**
     * A method definition looks like C code. It has a return type, arguments,
     * and optionally a list of exceptions that it may throw. Note that argument
     * lists and exception lists are specified using the exact same syntax as
     * field lists in struct or exception definitions.
     */
    ping(callback: Function): void;

    add(num1: number, num2: number): number;

    add(num1: number, num2: number, callback: Function): void;

    calculate(logid: number, w: tutorial.Work): number;

    calculate(logid: number, w: tutorial.Work, callback: Function): void;

    /**
     * This method has a oneway modifier. That means the client only makes
     * a request and does not listen for any response at all. Oneway methods
     * must be void.
     */
    zip(): void;

    /**
     * This method has a oneway modifier. That means the client only makes
     * a request and does not listen for any response at all. Oneway methods
     * must be void.
     */
    zip(callback: Function): void;
  }
}
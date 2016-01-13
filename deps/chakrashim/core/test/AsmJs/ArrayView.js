//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function foo() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25,
            Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN),
            new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , foo
          ];

function AsmModule(stdlib,foreign,buffer) {
    "use asm";

    // numerical mutable variable
    var x = 0, d1 = 0.0, i2 = -5;
    // foreign imports
    var fx = foreign.x|0;
    var fi2 = foreign.i2|0;
    var fd1 = +foreign.d1;
    var fd2 = +foreign.d2;
    var fun1 = foreign.fun1;
    var fun2 = foreign.fun2;

    // stdlib immutable variable type double
    var sInf = stdlib.Infinity, sNaN = stdlib.NaN;
    // stdlib math (double) -> double
    var m1 = stdlib.Math.acos ;
    var m2 = stdlib.Math.asin ;
    var m3 = stdlib.Math.atan ;
    var m4 = stdlib.Math.cos  ;
    var m5 = stdlib.Math.sin  ;
    var m6 = stdlib.Math.tan  ;
    var m7 = stdlib.Math.ceil ;
    var m8 = stdlib.Math.floor;
    var m9 = stdlib.Math.exp  ;
    var m10 = stdlib.Math.log  ;
    var m11 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var m12 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var m13 = stdlib.Math.atan2;
    var m34 = stdlib.Math.pow;
    // stdlib math (int,int) -> signed
    var m14 = stdlib.Math.imul;
    // stdlib math imm variable double
    var m15 = stdlib.Math.E;
    var m16 = stdlib.Math.LN10;
    var m17 = stdlib.Math.LN2;
    var m18 = stdlib.Math.LOG2E;
    var m19 = stdlib.Math.LOG10E;
    var m20 = stdlib.Math.PI;
    var m21 = stdlib.Math.SQRT1_2;
    var m22 = stdlib.Math.SQRT2;

    //views
    var HEAP8  =new stdlib.Int8Array(buffer);
    var HEAP16 =new stdlib.Int16Array(buffer);
    var HEAP32 =new stdlib.Int32Array(buffer);
    var HEAPU8 =new stdlib.Uint8Array(buffer);
    var HEAPU16=new stdlib.Uint16Array(buffer);
    var HEAPU32=new stdlib.Uint32Array(buffer);
    var HEAPF32=new stdlib.Float32Array(buffer);
    var HEAP64 =new stdlib.Float64Array(buffer);

    function f1(x,y){
        x = x|0;
        y = y|0;
        var i1 = 0, i2 = 0, i3 = 0;
        var d1 = 0.0, d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0;

        HEAP8  [x]=y;
        i1 = HEAP8  [x]|0;

        HEAP16 [x>>1]=y;
        i2 = HEAP16 [x>>1]|0;

        HEAP32 [x>>2]=y;
        i3 = HEAP32 [x>>2]|0;

        HEAPU8 [x>>0]=y;
        d1 = +(HEAPU8 [x]>>>0);

        HEAPU16[x>>1]=y;
        d2 = +(HEAPU16[x>>1]>>>0);

        HEAPU32[x>>2]=y;
        d3 = +(HEAPU32[x>>2]>>>0);

        HEAPF32[x>>2]=+(y|0);
        d4 = +HEAPF32[x>>2];

        HEAP64 [x>>3]=+(y|0);
        d5 = +HEAP64 [x>>3];
        fun1(i1|0,i2|0,i3|0,d1,d2,d3,d4,d5);
    }

    return f1;
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var env = {fun1:function(x1,x2,x3,x4,x5,x6,x7,x8){print(x1,x2,x3,x4,x5,x6,x7,x8);}, fun2:function(x,y){print(x,y);},x:155,i2:658,d1:68.25,d2:3.14156,f1:48.1523,f2:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var asmModule = AsmModule(global,env,buffer);

for (var i=0; i<all.length; ++i) {
    if( (all[i]|0)>=0 ) {
        for (var j=0; j<all.length; ++j) {
            print("  (a["+i+"](" + all[i] +") , a["+j+"](" + all[j] +") )= " + (asmModule   (all[i],all[j])));
        }
    }
}


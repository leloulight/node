// Copyright Microsoft. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files(the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and / or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions :
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

#ifndef DEF
#define DEF(x)
#endif

#ifndef DEFSYMBOL
#define DEFSYMBOL(x)
#endif

#ifndef DEF_IS_TYPE
#define DEF_IS_TYPE(x) DEF(x)
#endif

DEF(apply)
DEF(concat)
DEF(construct)
DEF(constructor)
DEF(defineProperty)
DEF(deleteProperty)
DEF(preventExtensions)
DEF(setPrototypeOf)
DEF(enumerate)
DEF(get)
DEF(has)
DEF(set)
DEF(ownKeys)
DEF(getOwnPropertyDescriptor)
DEF(getPrototypeOf)
DEF(hasOwnProperty)
DEF(isExtensible)
DEF(name)
DEF(length)
DEF(writable)
DEF(configurable)
DEF(enumerable)
DEF(value)
DEF(function)
DEF(script)
DEF(source)
DEF(filename)
DEF(stack)
DEF(cloneObject)
DEF(getPropertyNames)
DEF(getEnumerableNamedProperties)
DEF(getEnumerableIndexedProperties)
DEF(createEnumerationIterator)
DEF(createPropertyDescriptorsEnumerationIterator)
DEF(getNamedOwnKeys)
DEF(getIndexedOwnKeys)
DEF(getStackTrace)
DEF(getFunctionName)
DEF(getFileName)
DEF(getColumnNumber)
DEF(getLineNumber)
DEF(prototype)
DEF(toString)

DEFSYMBOL(self)
DEFSYMBOL(__external__)
DEFSYMBOL(__hiddenvalues__)
DEFSYMBOL(__isexternal__)
DEFSYMBOL(__keepalive__)

DEF_IS_TYPE(isMapIterator)
DEF_IS_TYPE(isSetIterator)
DEF_IS_TYPE(isBooleanObject)
DEF_IS_TYPE(isDate)
DEF_IS_TYPE(isMap)
DEF_IS_TYPE(isNativeError)
DEF_IS_TYPE(isPromise)
DEF_IS_TYPE(isRegExp)
DEF_IS_TYPE(isSet)
DEF_IS_TYPE(isStringObject)
DEF_IS_TYPE(isNumberObject)


#undef DEF
#undef DEFSYMBOL
#undef DEF_IS_TYPE

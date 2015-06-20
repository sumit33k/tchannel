// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var test = require('tape');
var TChannel = require('../../');

var HyperbahnClient = require('../../hyperbahn/index.js');

test('creating HyperbahnClient with new', function t(assert) {
    var c = new HyperbahnClient({
        tchannel: TChannel(),
        serviceName: 'foo',
        callerName: 'foo-test',
        hostPortList: []
    });

    assert.ok(c, 'can create a client');

    assert.end();
});

test('create HyperbahnClient without options', function t(assert) {
    assert.throws(function throwIt() {
        HyperbahnClient();
    }, /invalid option tchannel/);

    assert.end();
});

test('create HyperbahnClient without options.tchannel', function t(assert) {
    assert.throws(function throwIt() {
        HyperbahnClient({});
    }, /invalid option tchannel/);

    assert.end();
});

test('create HyperbahnClient with a subchannel', function t(assert) {
    assert.throws(function throwIt() {
        var tchannel = TChannel();

        HyperbahnClient({
            tchannel: tchannel.makeSubChannel({
                serviceName: 'foo'
            })
        });
    }, /invalid option tchannel/);

    assert.end();
});

test('create HyperbahnClient without serviceName', function t(assert) {
    assert.throws(function throwIt() {
        var tchannel = TChannel();

        HyperbahnClient({
            tchannel: tchannel
        });
    }, /invalid option serviceName/);

    assert.end();
});

test('create HyperbahnClient without hostPortList', function t(assert) {
    assert.throws(function throwIt() {
        var tchannel = TChannel();

        HyperbahnClient({
            tchannel: tchannel,
            serviceName: 'foo'
        });
    }, /invalid option hostPortList/);

    assert.end();
});

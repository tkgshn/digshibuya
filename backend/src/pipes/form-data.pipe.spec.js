"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_pipe_1 = require("./form-data.pipe");
describe('FormDataPipe', function () {
    it('should be defined', function () {
        expect(new form_data_pipe_1.FormDataPipe()).toBeDefined();
    });
    it('should transform numerical strings', function () {
        var pipe = new form_data_pipe_1.FormDataPipe();
        var body = {
            a: '1',
            b: '2',
            c: '3',
        };
        var metadata = {
            type: 'body',
        };
        expect(pipe.transform(body, metadata)).toEqual({
            a: 1,
            b: 2,
            c: 3,
        });
    });
    it('should ignore undefined attributes', function () {
        var pipe = new form_data_pipe_1.FormDataPipe();
        var body = {
            a: '1',
            b: undefined,
            c: '3',
        };
        var metadata = {
            type: 'body',
        };
        expect(pipe.transform(body, metadata)).toEqual({
            a: 1,
            b: undefined,
            c: 3,
        });
    });
    it('should ignore null attributes', function () {
        var pipe = new form_data_pipe_1.FormDataPipe();
        var body = {
            a: '1',
            b: null,
            c: '3',
        };
        var metadata = {
            type: 'body',
        };
        expect(pipe.transform(body, metadata)).toEqual({
            a: 1,
            b: null,
            c: 3,
        });
    });
    it('should ignore string attributes', function () {
        var pipe = new form_data_pipe_1.FormDataPipe();
        var body = {
            a: '1',
            b: 'string',
            c: '3',
        };
        var metadata = {
            type: 'body',
        };
        expect(pipe.transform(body, metadata)).toEqual({
            a: 1,
            b: 'string',
            c: 3,
        });
    });
    it('should ignore non-body arguments', function () {
        var pipe = new form_data_pipe_1.FormDataPipe();
        var body = {
            a: '1',
            b: '2',
            c: '3',
        };
        expect(pipe.transform(body, {
            type: 'custom',
        })).toEqual(body);
        expect(pipe.transform(body, {
            type: 'param',
        })).toEqual(body);
        expect(pipe.transform(body, {
            type: 'query',
        })).toEqual(body);
    });
});

import {Calculator, Operation} from '../src/Calculator';
import {expect} from 'chai';

let calculator: Calculator;
beforeEach(function ()
{
    calculator = new Calculator();
});

describe('Calculator', function ()
{
    describe('basic testing ', function ()
    {
        //basic testing
        it('should return 2 when adding 2', function ()
        {

            calculator.operation(1);
            calculator.input(2);
            expect(calculator.result).to.equal(2);
        });
        it('should return -2 when subtracting 2', function ()
        {
            calculator.operation(2);
            calculator.input(2);
            expect(calculator.result).to.equal(-2);
        });

        it('should return 0 when multiplying by any number', function ()
        {
            calculator.operation(3);
            calculator.input(Math.random());
            expect(calculator.result).to.equal(0);
        });

        it('should return 0 when dividing by any number', function ()
        {
            calculator.operation(4);
            calculator.input(Math.random());
            expect(calculator.result).to.equal(0);
        });
    });

    describe('testing expected errors ', function ()
    {

        //Test error giving an operation that is not defined
        it('should return an error when operation given does not exist', function ()
        {
            expect(function ()
            {

                calculator.operation(5);
                calculator.input(0);
            }).to.throw();
        });

        //Test division by  0
        it('should return an error when input is 0 and operation is div', function ()
        {
            expect(function ()
            {
                calculator.operation(4);
                calculator.input(0);
            }).to.throw();
        });

        //test pending operation (x2)
        it('should return an error when inserting operation twice', function ()
        {
            expect(function ()
            {
                calculator.operation(2);
                calculator.operation(1);
            }).to.throw();
        });

        it('should return an error when getting result without defining an operation', function ()
        {
            expect(function ()
            {
                calculator.operation(Operation.ADD);
                calculator.result;
            }).to.throw();
        });
    });
});
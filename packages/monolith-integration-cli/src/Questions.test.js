const expect = require('chai').expect;
const questions = require('./Questions');

describe('Questions Test Suite', () => {
    describe('when requiring object', () => {
        it('should get 7 objects and an array', () => {
            expect(questions.pathQuestion).to.be.an('object');
            expect(questions.addRouteQuestion).to.be.an('object');
            expect(questions.operandTypeQuestion).to.be.an('object');
            expect(questions.userRegexQuestion).to.be.an('object');
            expect(questions.commandQuestion).to.be.an('object');
            expect(questions.routeQuestion).to.be.an('object');
            expect(questions.allQuestions).to.be.an('array');
        });
    });

    describe('when calling \'when\' functions', () => {
        it('should be ok', () => {
            const answer = {};
            expect(
            questions.userRegexQuestion.when(answer)
          ).to.equal(undefined);
            expect(
          questions.operandTypeQuestion.when(answer)
        ).to.equal(undefined);
        });
    });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server'); // Import the Express app directly

const expect = chai.expect;
chai.use(chaiHttp);

describe('Server', () => {
  it('should return "Hello, World!" when GET /', (done) => {
    chai
      .request(app) // Use the app directly
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});

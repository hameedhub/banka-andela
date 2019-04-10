import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';

import app from '../../app';

chai.use(chaiHttp);

describe('POST/ User sign up', () => {
  it('should POST user data', (done) => {
    const user = {
      firstName: 'Hameed',
      lastName: 'Abdul',
      email: 'h@gmail.com',
      password: '12345n'
    };
    chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.have.property('firstName');
        expect(res.body.data).to.have.property('lastName');
        expect(res.body.data).to.have.property('email');
        expect(res.body.data).to.have.property('password');
        done();
      });
  });
});
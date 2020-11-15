import request from 'supertest';
import { app } from '../../app';

it("test the current logged in user", async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abc@abc.com',
        password:'11saw'
      }
  )
    .expect(201)
  
  const currentUserResponse = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie',response.get('Set-cookie'))
    .send()
    .expect(200)
  
  console.log(currentUserResponse.body);
  
});
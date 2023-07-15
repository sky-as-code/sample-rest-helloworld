import * as request from 'supertest';

import app from '../src/app';

describe('API Test', () => {
	let agent: request.SuperTest<request.Test>;

	beforeAll(() => {
		agent = request(app);
	});

	it('Should respond with greeting message', async () => {
		const res = await agent.get('/v1/sample-rest');

		expect(res.statusCode).toEqual(200);
		expect(res.text).toBe('Hello world');
	})
});

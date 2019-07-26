const googleSearch = require('./script');

dbMock = [
	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com'
]

describe('Google Search', () => {
	it('a silly test', ()=> {
	expect('hello').toBe('hello')
	googleSearch('testtest',dbMock);
})

it('is serching google', ()=> {
	expect(googleSearch('testtest',dbMock)).toEqual([])
	expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com'])
})

it('works with undefined and null input', ()=> {
	expect(googleSearch(undefined,dbMock)).toEqual([]);
	expect(googleSearch(null,dbMock)).toEqual([]);
})

it('doesnt return more than 3 matches', () => {
	expect(googleSearch('.com',dbMock).length).toEqual(3);
})
})








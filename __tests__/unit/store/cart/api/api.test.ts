import axios from 'axios';
import getCategoriesFromAPI from '../../../../../src/api';
import data from '../../../../../src/assets/shop-data.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
    // cleaning up the mess left behind the previous test
    jest.clearAllMocks();
});

describe('getCategoriesFromAPI', () => {
    it('fetches categories from an API', async () => {
        // simulating a server response
        mockedAxios.get.mockResolvedValue({ data });

        const result = await getCategoriesFromAPI();

        expect(result).toEqual({ shop_data: data });
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/shop_data');
    });
});
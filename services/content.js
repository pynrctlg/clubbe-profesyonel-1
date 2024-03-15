import dbContext from './dbContext';
const repo = dbContext('contents');

export const getData = async (filter) => {
    try {
        let match = { ...filter, language_code: 'tr', status: 1 };

        const { data, error } = await repo.getQuery()
            .select('*')
            .match(match);

        return data;

    } catch (error) {
        console.log(error);
    }
};
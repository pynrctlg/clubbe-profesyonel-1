import dbContext from './dbContext';
const repo = dbContext('contents');

export const getData = async (filter, limit) => {
    try {
        let match = { ...filter, language_code: 'tr', status: 1 };

        const query =
            repo.getQuery()
                .select('*')
                .match(match);
        if (limit) {
            query.limit(limit);
        }
        const { data, error } = await query;
        return data;

    } catch (error) {
        console.log(error);
    }
};

export const search = async (str) => {
    try {
        const options = {
            type: 'websearch',
            language: 'turkish'
        };
        const { data, error } = await repo.getQuery()
            .select()
            .textSearch('content', str, options);

        return data;

    } catch (error) {
        console.log(error);
    }
};
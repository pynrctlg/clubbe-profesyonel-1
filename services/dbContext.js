import { supabase } from '../utils/supabase'

const dbContext = (tableName) => {
    return {
        getQuery: () => {
            return supabase.from(tableName);
        },
        getAll: async (filter) => {
            const { data, error } = await supabase
                .from(tableName)
                .select('*')
                .match(filter)

            if (error) {
                throw new Error(error.message)
            }

            return data
        },

        getById: async (id) => {
            const { data, error } = await supabase
                .from(tableName)
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                throw new Error(error.message)
            }

            return data
        },

        create: async (data) => {
            const { data: createdData, error } = await supabase
                .from(tableName)
                .insert(data)

            if (error) {
                throw new Error(error.message)
            }

            return createdData
        },

        update: async (id, data) => {
            const { data: updatedData, error } = await supabase
                .from(tableName)
                .update(data)
                .eq('id', id)

            if (error) {
                throw new Error(error.message)
            }

            return updatedData
        },

        delete: async (id) => {
            const { error } = await supabase
                .from(tableName)
                .delete()
                .eq('id', id)

            if (error) {
                throw new Error(error.message)
            }

            return true
        }
    }
}

export default dbContext

import { useEffect, useState } from "react" 
import { Alert } from "react-native"

const useAppwrite = (fn: () => Promise<any>) => {
    const [data, setData] = useState<any>([])
    
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchData = async () => {
        setIsLoading(true)

        try {
            const result = await fn()

            setData(result)
        } catch (error: any) {
            Alert.alert('Error', error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => fetchData()
    
    return { data, isLoading, refetch }
}

export default useAppwrite
import axios from 'axios'

const searchImage = async(term) => { 

    const url = 'http://api.unsplash.com/search/photos/?client_id=pvJSnUmmVjhASDDQjhWgaao2JKQ3kxLSXKgsC0RTIyk'

    const response = await axios.get(url, {
    params: {
        query: 'cars'
    }

})

    console.log(response)


}

export default searchImage 
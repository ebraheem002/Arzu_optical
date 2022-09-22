import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation,useNavigate } from 'react-router-dom';
function SearchBar(){
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }
    return(
            <div className='searchbar'>
                <input  onChange={(e) =>setInput(e.target.value)} type='text' className='search_box' />
                <SearchIcon onClick={submitHandler} className="header_searchIcon" />
            </div>
    )
}

export default SearchBar

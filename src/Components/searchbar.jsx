import logo from '../logo.svg';
import '../styles/App.scss';
import React, {useState} from 'react'
import '../styles/SearchBar.css'

export default function SearchBar() {
    const searchBar = () => {}
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if(searchInput.length > 0) {

    }
    return (
        <div id="cover">
            <form method="get" action="./searchbar">
                <div className="tb">
                    <div className="td"><input type="text" placeholder="Search" required/></div>
                    <div className="td" id="s-cover">
                        <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
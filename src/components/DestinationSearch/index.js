// // Write your code here
// import {Component} from 'react'
// import Destination from '../DestinationItem'
// import './index.css'

// class DestinationSearch extends Component {
//   state = {searchInput: ''}

//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   render() {
//     const {searchInput} = this.state
//     const {destinationsList} = this.props
//     const searchResult = destinationsList.filter(each =>
//       each.name.toLowerCase().includes(searchInput.toLowerCase()),
//     )

//     return (
//       <div className="app-container">
//         <div className="destinations-search-container">
//           <h1 className="heading">Destination Search</h1>
//           <div className="search-input-container">
//             <input
//               type="search"
//               className="search-input"
//               placeholder="Search"
//               value={searchInput}
//               onChange={this.onChangeSearchInput}
//             />
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
//               alt="search icon"
//               className="search-icon"
//             />
//           </div>
//           <ul className="destinations-list">
//             {searchResult.map(each => (
//               <Destination key={each.id} destinationDetails={each} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

import {useState} from 'react'
import './index.css'
import Destination from '../DestinationItem'

const DestinationSearch = props => {
  const [searchInput, setSearchInput] = useState('')
  const onChangeSearchInput = event => setSearchInput(event.target.value)
  const {destinationsList} = props
  const searchResult = destinationsList.filter(each =>
    each.name.toLowerCase().includes(searchInput.toLowerCase()),
  )
  return (
    <div className="app-container">
      <div className="destinations-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {searchResult.map(each => (
            <Destination key={each.id} destinationDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DestinationSearch

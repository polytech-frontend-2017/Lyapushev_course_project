import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: ''
    }
  }
  

  handleSearch (e) {
   // this.setState({ city: e.target.value })
  }

  handleGoClick (e) {
   this.setState({city :  e.target.previousSibling.value})
   
  }

  render () {
	  
	  
	  
	  
	  
	  
    return (
      <div className='searchbar-container'>
        <form onSubmit={e => e.preventDefault()}>
          
		  
		  
		  
		  <input
            type='text'
            size='45'
            placeholder='City'
            //onChange={this.handleSearch.bind(this)}
            //value={this.state.city}
			
			ref ='author'
			/>
			
			
			
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Go!
          </button>
		  
		  
		 
		  <p>{this.state.city}</p>
		  
		  
        </form>
	
      </div>
	  
	  
	 
    )
	
	
	
  }
}

export default SearchBar;
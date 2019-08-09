import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addItem} from '../store/gallery'

class AddItem extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      imageUrl: '',
      homepage: false,
      category: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="additem">
        <form onSubmit={this.handleSubmit} className="add_form">
          {/* <div className="radio">
            <p>Category</p>
            <label htmlFor="category">
              <input
                type="radio"
                value="Galeria"
                checked={true}
                onChange={this.handleChange}
                name="category"
              />
              Galeria
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input
                type="radio"
                value="Irasok"
                onChange={this.handleChange}
                name="category"
              />
              Irasok
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input
                type="radio"
                value="Referencia"
                onChange={this.handleChange}
                name="category"
              />
              Referencia
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input
                type="radio"
                value="Fekhang"
                onChange={this.handleChange}
                name="category"
              />
              Fekhang
            </label>
          </div>
          <div className="radio">
            <label htmlFor="category">
              <input
                type="radio"
                value="Szerviz"
                onChange={this.handleChange}
                name="category"
              />
              Szerviz
            </label>
          </div> */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="textbox"
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            name="description"
            className="textbox_desc"
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">Image url: </label>
          <input
            type="text"
            name="imageUrl"
            className="textbox"
            onChange={this.handleChange}
          />
          <div className="radio">
            <p>Boritokep</p>
            <label>
              <input
                type="radio"
                value="false"
                checked={true}
                onChange={this.handleChange}
                name="homepage"
              />
              Nem
            </label>
          </div>
          <div className="radio_end">
            <label>
              <input
                type="radio"
                value="true"
                onChange={this.handleChange}
                name="homepage"
              />
              Igen
            </label>
          </div>

          <label htmlFor="category" className="form_cat">
            Kategoria (Galeria, Irasok, Referencia, Fekhang, Szerviz)
          </label>
          <textarea
            type="text"
            name="category"
            className="textbox"
            onChange={this.handleChange}
          />
          <button type="submit" className="buttons">
            submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem(pic) {
      dispatch(addItem(pic))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItem)

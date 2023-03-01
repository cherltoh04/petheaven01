import React from 'react';
import PetList from './PetList';

class Pet extends React.Component {
  render() {

    return (

      <div className="PetItem">
          <img class="img"src={this.props.productImageUrl} />
        <div className='des'>
            <p>Name: {this.props.name}</p>
            <p>Breed: {this.props.breed}</p>
            <p>Category: {this.props.category}</p>
            <p>Gender: {this.props.gender}</p>
            <p>DOB: {this.props.born}</p>
      </div>      
      </div>


    );
  }
}

class ProductList extends React.Component {
  render() {
    const PetList = this.props.PetList;
    return PetList.map(pet => (
      <Pet
        name={pet.name}
        breed={pet.breed}
        category={pet.category}
        gender={pet.gender}
        born={pet.born}
        productImageUrl={pet.productImageUrl}
      />
    ));
    }
  }
  

export default function AdoptionGallery() {
        return (
          <div>
            <section class="Welcomemessage">
              <div class= "w1">
                Welcome to Our Little Pet Gallery
                <br></br></div>
            <ProductList PetList={PetList} />
            </section>

          </div>
  );
}
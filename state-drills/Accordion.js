import React, { Component } from 'react';



const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  


class Accordion extends React.Component {

    static defaultProps = {
        sections: [{
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          },]
    }
    state = {
        activeSectionIndex: null,
    }

    handleButtonClick = (sectionIndex) => {
        this.setState({activeSectionIndex: sectionIndex})
    }

    renderItem(section, index, activeSectionIndex) {
        return (
            <li className='Accoridon_item' key={index}>
                 <button  
                 type='button'
                 onClick={() => this.handleButtonClick(index)}>
                 {section.title}
                 </button>
                 {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }


    render() {
        const {activeSectionIndex} = this.state
        const {sections} = this.props
        return (
    <ul className='Accordion'>
         {sections.map((section, index) =>
            this.renderItem(section, index, activeSectionIndex)
            )}
    </ul>
        )
    }
  }


  export default Accordion;
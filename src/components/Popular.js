import React from 'react';

class Popular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    
    updateLanguage(selectedLanguage) {
        this.setState({ selectedLanguage });
    }

    render() { 
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className="languages">
                {languages.map((language) => (
                    <li key={language}
                           onClick={() => this.updateLanguage(language)}
                           style={language === this.state.selectedLanguage ? {color: '#d0021b'} : null }>
                        {language}
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Popular;
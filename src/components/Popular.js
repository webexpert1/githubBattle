import React from 'react';

function LanguagesNav({ selectedLanguage, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className="languages">
                {languages.map((language) => (
                    <li key={language}
                           onClick={() => onUpdateLanguage(language)}
                           style={language === selectedLanguage ? {color: '#d0021b'} : null }>
                        {language}
                    </li>
                ))}
            </ul>
        );
}
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
        const { selectedLanguage } = this.state;
        return (
            <LanguagesNav selectedLanguage={selectedLanguage}  onUpdateLanguage={this.updateLanguage} />
        )
    }
}
 
export default Popular;
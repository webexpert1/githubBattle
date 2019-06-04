import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

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

LanguagesNav.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

function ReposGrid({ repos }) {
    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => {
                return (
                <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img className='avatar'
                                src={repo.owner.avatar_url}
                                alt={`Avatar for ${repo.owner.login}`} />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
                )
            })}

            
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array
}
class Popular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }
    
    updateLanguage(selectedLanguage) {
        this.setState({ selectedLanguage, repos: null });

        fetchPopularRepos(selectedLanguage)
            .then((repos) => {
                console.log(repos);
                this.setState({ repos: repos})
            })
    }

    render() { 
        const { selectedLanguage } = this.state;
        return (
            <React.Fragment>
                <LanguagesNav selectedLanguage={selectedLanguage}  onUpdateLanguage={this.updateLanguage} />
                {!this.state.repos
                ?   <p>LOADING</p>
                : <ReposGrid repos={this.state.repos}/> }
            </React.Fragment>
        )
    }
}
 
export default Popular;
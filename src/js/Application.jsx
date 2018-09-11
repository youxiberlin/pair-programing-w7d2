import React from 'react'
import contacts from './contacts.json'
import Actor from './Actor'

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actors: []
        }

        this._putActor = this._putActor.bind(this)
        this._sortActor = this._sortActor.bind(this)
    }

    componentDidMount() {
        this._createActor()
    }

    render() {
        console.log(contacts)

        const mappedActors = this.state.actors.map((actor, index) => (
            <Actor
                pictureUrl={actor.pictureUrl}
                name={actor.name}
                popularity={actor.popularity}
                key={index}
            />
        ));

        return (
            <div className="application">
                <h1>IronContacts</h1>
                <button onClick={this._putActor}>Add Randome Contact</button>
                <button onClick={this._sortActor}>Sort by Name</button>

                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {mappedActors}
                </table>
            </div>
        )
    }

    _createActor() {
        const firstAct = [];
        for (let i = 0; i < 5; i++) {
            firstAct.push(contacts[i]
            )
        }
        this.setState({
            actors: firstAct
        })
    }

    _randomNum() {
        const min = 5;
        const max = contacts.length;
        return Math.floor(Math.random() * Math.floor(max - min)) + min
    }

    _putActor() {
        const newActor = contacts[this._randomNum()]
        this.setState({
            actors: [...this.state.actors, newActor]
        })
        console.log(this.state.actors);
    }

    _sortActor() {


    }
}

export default Application

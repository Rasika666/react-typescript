import { useState } from "react";
import {useAction} from '../hooks/useAction';
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoryList: React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepository} = useAction();
    const {loading, error, data} = useTypedSelector(state => state.repository);
  

    const onSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       searchRepository(term);
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!loading && !error && 
            data.map(name => <div key={name}>{name}</div>)
        }
</div>
    );
};

export default RepositoryList;
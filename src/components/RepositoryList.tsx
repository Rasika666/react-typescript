import { useState } from "react";

const RepositoryList: React.FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
    <div>
        <form onSubmit={onsubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
    );
};

export default RepositoryList;
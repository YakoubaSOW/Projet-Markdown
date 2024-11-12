import {useEffect, useState} from 'react'

function CitationDuJour(){
  const [citation, setCitation] = useState({
    advice: "",
});

  function fetchCitationDuJour() {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => (res.json()))
    .then((data) => setCitation(data.slip))
  }

  useEffect(() => {
    fetchCitationDuJour();
  }, []);

  return (
    <div>
        {citation.advice}
    </div>
  )
}
export default CitationDuJour
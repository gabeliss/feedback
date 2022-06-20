import React from 'react'

function Stars({select, selected}) {

  const handleChange = (e) => {
    select(+e.currentTarget.value)
  }

  return (
    <div className="rate">
        <input type="radio" id="star5-static" name="rate" value="5" checked={selected === 5} 
        onChange={handleChange}/>
        <label htmlFor="star5-static" title="text">5 stars</label>
        <input type="radio" id="star4-static" name="rate" value="4" checked={selected === 4}
        onChange={handleChange}/>
        <label htmlFor="star4-static" title="text">4 stars</label>
        <input type="radio" id="star3-static" name="rate" value="3" checked={selected === 3}
        onChange={handleChange}/>
        <label htmlFor="star3-static" title="text">3 stars</label>
        <input type="radio" id="star2-static" name="rate" value="2" checked={selected === 2}
        onChange={handleChange}/>
        <label htmlFor="star2-static" title="text">2 stars</label>
        <input type="radio" id="star1-static" name="rate" value="1" checked={selected === 1}
        onChange={handleChange}/>
        <label htmlFor="star1-static" title="text">1 star</label>
    </div>
  )
}

export default Stars
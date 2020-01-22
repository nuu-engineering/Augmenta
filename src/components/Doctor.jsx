import * as React from 'react';

const Doctor = ({ slug, name, field, location }) => {
  return (
    <div
      key={slug}
      className="doctor w-dyn-item w-col w-col-6"
    >
      <a href={`/doctors/${slug}`} className="w-inline-block">
        <p className="doctor-name">{name}</p>
        <p className="doctor-knowledge">{field}</p>
        <p className="text-dark-blue">{location}</p>
      </a>
    </div>
  )
}

export default Doctor;
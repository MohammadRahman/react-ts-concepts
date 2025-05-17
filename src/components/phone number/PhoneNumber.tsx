import React from 'react'

const PhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = React.useState<string>("+372 ");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;

    // Always start with +372
    if (!input.startsWith("+372")) {
      input = "+372 ";
    }

    // Remove everything except digits after country code
    const digitsOnly = input.replace(/^\+372\s?/, "").replace(/\D/g, "");

    // Format: 4 digits + space + 4 digits
    let formatted = "";
    if (digitsOnly.length <= 4) {
      formatted = digitsOnly;
    } else {
      formatted = digitsOnly.slice(0, 4) + " " + digitsOnly.slice(4, 8);
    }

    setPhoneNumber(`+372 ${formatted}`);
  }

  return (
    <div>
        <input style={{padding:'1rem'}} type="text" value={phoneNumber} onChange={handleChange} />
    </div>
  )
}

export default PhoneNumber;
"use client";

import { useState } from 'react';

interface ChildInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  gender: string;
  class: string;
  address: string;
  passport: string;
}

interface ParentInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export default function RegistrationForm() {
  const [children, setChildren] = useState<ChildInfo[]>([{
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: 'Female',
    class: '',
    address: '',
    passport: ''
  }]);

  const [parentInfo, setParentInfo] = useState<ParentInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const addChild = () => {
    setChildren([...children, {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: 'Female',
      class: '',
      address: '',
      passport: ''
    }]);
  };

  const removeChild = (index: number) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ children, parentInfo });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Register your child with ease</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {children.map((child, index) => (
          <div key={index} className="space-y-6 border-b border-gray-200 pb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Child’s Information {index > 0 && `#${index + 1}`}</h2>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeChild(index)}
                  className="text-red-600 text-sm font-medium hover:text-red-700"
                >
                  Remove Child
                </button>
              )}
            </div>

            {/* Child's Name Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type first name here"
                  value={child.firstName}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].firstName = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type middle name here"
                  value={child.middleName}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].middleName = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type last name here"
                  value={child.lastName}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].lastName = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
            </div>

            {/* Child's Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={child.dob}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].dob = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={child.gender}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].gender = e.target.value;
                    setChildren(newChildren);
                  }}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter class"
                  value={child.class}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].class = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Passport number"
                  value={child.passport}
                  onChange={(e) => {
                    const newChildren = [...children];
                    newChildren[index].passport = e.target.value;
                    setChildren(newChildren);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your address here"
                value={child.address}
                onChange={(e) => {
                  const newChildren = [...children];
                  newChildren[index].address = e.target.value;
                  setChildren(newChildren);
                }}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="button"
            onClick={addChild}
            className="flex items-center px-6 py-2.5 text-blue-600 font-medium border-2 border-dashed border-blue-200 rounded-lg hover:border-blue-300 hover:text-blue-700 transition-all"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Another Child
          </button>
        </div>

        {/* Parent/Guardian Section */}
        <div className="space-y-6 pt-8">
          <h2 className="text-xl font-semibold text-gray-800">Parent/Guardian Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type first name here"
                value={parentInfo.firstName}
                onChange={(e) => setParentInfo({...parentInfo, firstName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type last name here"
                value={parentInfo.lastName}
                onChange={(e) => setParentInfo({...parentInfo, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your email here"
                value={parentInfo.email}
                onChange={(e) => setParentInfo({...parentInfo, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your number here"
                value={parentInfo.phone}
                onChange={(e) => setParentInfo({...parentInfo, phone: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your address here"
              value={parentInfo.address}
              onChange={(e) => setParentInfo({...parentInfo, address: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}


// "use client"



// // components/RegistrationForm.tsx
// import React, { useState } from 'react';
// import { RegistrationFormData, ChildInfo, ParentGuardianInfo } from '../types/registration';

// const RegistrationForm: React.FC = () => {
//   const [formData, setFormData] = useState<RegistrationFormData>({
//     children: [{
//       firstName: '',
//       middleName: '',
//       lastName: '',
//       dateOfBirth: null,
//       gender: 'Female',
//       class: 'Jss 1',
//       homeAddress: '',
//       passportPhoto: null,
//     }],
//     parentGuardian: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phoneNumber: '',
//       homeAddress: '',
//     },
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChildChange = (index: number, field: keyof ChildInfo, value: string | Date | null | File | 'Male' | 'Female' | 'Other') => {
//     const newChildren = [...formData.children];
//     newChildren[index] = { ...newChildren[index], [field]: value };
//     setFormData({ ...formData, children: newChildren });
//   };

//   const handleParentChange = (field: keyof ParentGuardianInfo, value: string) => {
//     setFormData({
//       ...formData,
//       parentGuardian: { ...formData.parentGuardian, [field]: value },
//     });
//   };

//   const addChild = () => {
//     setFormData({
//       ...formData,
//       children: [...formData.children, {
//         firstName: '',
//         middleName: '',
//         lastName: '',
//         dateOfBirth: null,
//         gender: 'Female',
//         class: 'Jss 1',
//         homeAddress: '',
//         passportPhoto: null,
//       }],
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors: Record<string, string> = {};
    
//     formData.children.forEach((child, index) => {
//       if (!child.firstName) newErrors[`child${index}FirstName`] = 'First name is required';
//       if (!child.lastName) newErrors[`child${index}LastName`] = 'Last name is required';
//     });

//     if (!formData.parentGuardian.firstName) {
//       newErrors.parentFirstName = 'Parent first name is required';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Form submitted:', formData);
//     setErrors({});
//   };

//   const handleFileChange = (index: number, file: File | null) => {
//     const newChildren = [...formData.children];
//     newChildren[index] = { ...newChildren[index], passportPhoto: file };
//     setFormData({ ...formData, children: newChildren });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-blue-700">Register your child with ease</h1>
      
//       {formData.children.map((child, index) => (
//         <div key={index} className="mb-8 border-b pb-4">
//           <h2 className="text-lg font-semibold mb-4">Child {index + 1} Information</h2>
          
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <div>
//             <label className="block text-gray-600 text-sm mb-1">Child full name</label>
//               <input
//                 type="text"
//                 placeholder="Type first name here"
//                 value={child.firstName}
//                 onChange={(e) => handleChildChange(index, 'firstName', e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//               {errors[`child${index}FirstName`] && (
//                 <span className="text-red-500 text-sm">{errors[`child${index}FirstName`]}</span>
//               )}
              
//               <input
//                 type="text"
//                 placeholder="Type middle name here"
//                 value={child.middleName}
//                 onChange={(e) => handleChildChange(index, 'middleName', e.target.value)}
//                 className="w-full p-2 border rounded mt-2"
//               />
              
//               <input
//                 type="text"
//                 placeholder="Type last name here"
//                 value={child.lastName}
//                 onChange={(e) => handleChildChange(index, 'lastName', e.target.value)}
//                 className="w-full p-2 border rounded mt-2"
//               />
//               {errors[`child${index}LastName`] && (
//                 <span className="text-red-500 text-sm">{errors[`child${index}LastName`]}</span>
//               )}
//             </div>

//             <div>
//               <div className="flex gap-4 mb-4">
//                 <div className="w-1/2">
//                   <label className="block text-gray-600 text-sm mb-1">Date of birth</label>
//                   <input
//                     type="date"
//                     value={child.dateOfBirth?.toString() || ''}
//                     onChange={(e) => handleChildChange(index, 'dateOfBirth', new Date(e.target.value))}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block text-gray-600 text-sm mb-1">Gender</label>
//                   <select
//                     value={child.gender}
//                     onChange={(e) => handleChildChange(index, 'gender', e.target.value as 'Male' | 'Female' | 'Other')}
//                     className="w-full p-2 border rounded"
//                   >
//                     <option value="Female">Female</option>
//                     <option value="Male">Male</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block text-gray-600 text-sm mb-1">Class</label>
//                   <select
//                     value={child.class}
//                     onChange={(e) => handleChildChange(index, 'class', e.target.value)}
//                     className="w-full p-2 border rounded"
//                   >
//                     <option value="Jss 1">Jss 1</option>
//                   </select>
//                 </div>
//               </div>

//               <label className="block text-gray-600 text-sm mb-1">Home address</label>
//               <textarea
//                 placeholder="Type your address here"
//                 value={child.homeAddress}
//                 onChange={(e) => handleChildChange(index, 'homeAddress', e.target.value)}
//                 className="w-full p-2 border rounded"
//               />

//               <label className="block text-gray-600 text-sm mb-1 mt-2">Upload passport</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleFileChange(index, e.target.files?.[0] || null)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addChild}
//         className="mb-6 text-blue-600 flex items-center gap-2"
//       >
//         <span className="w-5 h-5 border border-blue-600 rounded-full flex items-center justify-center">+</span>
//         Add another child
//       </button>

//       <h2 className="text-lg font-semibold mb-4">Parent/Guardian Information</h2>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <div>
//           <label className="block text-gray-600 text-sm mb-1">Parent/Guardian full name</label>
//           <input
//             type="text"
//             placeholder="Type first name here"
//             value={formData.parentGuardian.firstName}
//             onChange={(e) => handleParentChange('firstName', e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//           {errors.parentFirstName && (
//             <span className="text-red-500 text-sm">{errors.parentFirstName}</span>
//           )}
          
//           <input
//             type="text"
//             placeholder="Type last name here"
//             value={formData.parentGuardian.lastName}
//             onChange={(e) => handleParentChange('lastName', e.target.value)}
//             className="w-full p-2 border rounded mt-2"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-600 text-sm mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="Type your email here"
//             value={formData.parentGuardian.email}
//             onChange={(e) => handleParentChange('email', e.target.value)}
//             className="w-full p-2 border rounded"
//           />
          
//           <label className="block text-gray-600 text-sm mb-1 mt-2">Phone number</label>
//           <input
//             type="tel"
//             placeholder="Type your number here"
//             value={formData.parentGuardian.phoneNumber}
//             onChange={(e) => handleParentChange('phoneNumber', e.target.value)}
//             className="w-full p-2 border rounded"
//           />
          
//           <label className="block text-gray-600 text-sm mb-1 mt-2">Home address</label>
//           <textarea
//             placeholder="Type your address here"
//             value={formData.parentGuardian.homeAddress}
//             onChange={(e) => handleParentChange('homeAddress', e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         onClick={handleSubmit}
//         className="mt-6 w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default RegistrationForm;
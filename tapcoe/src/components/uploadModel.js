import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UploadModal = ({ isOpen, onRequestClose }) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [uuid, setUuid] = useState('');

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleImageChange = async (e) => {
    const image = e.target.files[0];
    setFile(image);

    if (!selectedEvent || !image) {
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('eventName', selectedEvent);

      const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setImageUrl(data.url);
      setUuid(data?.uuid) // Assuming your API returns the image URL

      // Optionally close the modal or perform other actions upon successful upload
      // onRequestClose();
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error state or display error message to the user
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
  

    // setLoading(true);

    try {
      const response = await fetch('https://tapcoe-backend.onrender.com/api/v1/addParticipant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            eventName: selectedEvent,
          email: localStorage.getItem("email"), // Replace with actual email from state or props
          profileImgUrl: imageUrl,
          uuid: uuid, // Replace with actual uuid from state or props
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add participant');
      }

      // Optionally handle success state or close modal
      console.log('Participant added successfully');
      toast.success("Participant added successfully");
      // onRequestClose();
    } catch (error) {
      console.error('Error adding participant:', error);
      toast.error(error);
      // Handle error state or display error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" onClick={onRequestClose}></div>
          <div className="relative bg-white rounded-lg p-8 max-w-lg w-full">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onRequestClose}>
              <FaTimes />
            </button>
            <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
            <select
              className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
              value={selectedEvent}
              onChange={handleEventChange}
            >
              <option value="">Select Event</option>
              <option value="Summer Tech Expo">Summer Tech Expo</option>
              <option value="event2">Event 2</option>
              <option value="event3">Event 3</option>
              <option value="event4">Event 4</option>
              <option value="event5">Event 5</option>
            </select>
            <input type="file" accept=".png" onChange={handleImageChange} className="mt-4" />
            {isLoading && (
              <div className="flex justify-center items-center h-12 mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                <p className="ml-2">Uploading image...</p>
              </div>
            )}
            {imageUrl && !isLoading && (
              <div className="text-center mt-4">
                <p>Image uploaded successfully!</p>
                <img src={imageUrl} alt="Uploaded" className="mt-4 rounded-lg max-w-full" />
               
              </div>
            )}
              <div className="text-center mt-4">
              <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save Participant
                </button>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;

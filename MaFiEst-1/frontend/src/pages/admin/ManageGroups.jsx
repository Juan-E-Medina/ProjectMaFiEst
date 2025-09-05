import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageGroups = () => {
    const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [editingGroupId, setEditingGroupId] = useState(null);

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const response = await axios.get('/api/groups');
            setGroups(response.data);
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    const handleAddGroup = async () => {
        try {
            const response = await axios.post('/api/groups', { name: groupName });
            setGroups([...groups, response.data]);
            setGroupName('');
        } catch (error) {
            console.error('Error adding group:', error);
        }
    };

    const handleEditGroup = async (id) => {
        try {
            const response = await axios.put(`/api/groups/${id}`, { name: groupName });
            setGroups(groups.map(group => (group.id === id ? response.data : group)));
            setGroupName('');
            setEditingGroupId(null);
        } catch (error) {
            console.error('Error editing group:', error);
        }
    };

    const handleDeleteGroup = async (id) => {
        try {
            await axios.delete(`/api/groups/${id}`);
            setGroups(groups.filter(group => group.id !== id));
        } catch (error) {
            console.error('Error deleting group:', error);
        }
    };

    return (
        <div>
            <h1>Manage Groups</h1>
            <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Group Name"
            />
            <button onClick={editingGroupId ? () => handleEditGroup(editingGroupId) : handleAddGroup}>
                {editingGroupId ? 'Update Group' : 'Add Group'}
            </button>
            <ul>
                {groups.map(group => (
                    <li key={group.id}>
                        {group.name}
                        <button onClick={() => { setGroupName(group.name); setEditingGroupId(group.id); }}>Edit</button>
                        <button onClick={() => handleDeleteGroup(group.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageGroups;
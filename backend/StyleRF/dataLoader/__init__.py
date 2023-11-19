from .blender import BlenderDataset
from .your_own_data import YourOwnDataset


dataset_dict = {'blender': BlenderDataset,
                'own_data':YourOwnDataset}
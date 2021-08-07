class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :folders, :notes
end

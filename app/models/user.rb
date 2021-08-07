class User < ApplicationRecord
    has_many :folders
    has_many :notes, through: :folders
end
